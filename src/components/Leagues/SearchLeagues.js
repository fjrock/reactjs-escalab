import React, { useState, useMemo, useRef, useCallback, useEffect, useContext } from 'react';
import { LeaguesContext } from '../../contexts/LeaguesContext';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5, 2, 2),
    marginBottom: theme.spacing(2),
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 3, 2.5),
    },
  },
  title: {
    marginBottom: theme.spacing(0.5),
    color: theme.palette.text.primary,
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
  },
  flag: {
    width: 28,
    height: 20,
    objectFit: 'cover',
    borderRadius: 4,
    boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
    flexShrink: 0,
  },
  flagPlaceholder: {
    width: 28,
    height: 20,
    borderRadius: 4,
    backgroundColor: theme.palette.action.hover,
    flexShrink: 0,
  },
  listPaper: {
    maxHeight: 320,
    overflow: 'auto',
    marginTop: theme.spacing(0.5),
    boxShadow: theme.shadows[8],
  },
  hint: {
    padding: theme.spacing(1.5, 2),
    color: theme.palette.text.secondary,
    fontSize: '0.8125rem',
  },
}));

function normalize(s) {
  return String(s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

const SearchLeagues = () => {
  const classes = useStyles();
  const { validateC, countries, selectedCountry } = useContext(LeaguesContext);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(selectedCountry || '');

  useEffect(() => {
    setInputValue(selectedCountry || '');
  }, [selectedCountry]);

  const filtered = useMemo(() => {
    const list = countries || [];
    const q = inputValue.trim();
    if (!q) return list.slice(0, 100);
    const nq = normalize(q);
    return list.filter((c) => normalize(c.name_en).includes(nq)).slice(0, 200);
  }, [countries, inputValue]);

  const closeList = useCallback(() => setOpen(false), []);

  const handleClear = useCallback(() => {
    setInputValue('');
    validateC('');
    closeList();
  }, [validateC, closeList]);

  const handleSelect = useCallback(
    (c) => {
      setInputValue(c.name_en);
      validateC(c.name_en);
      closeList();
    },
    [validateC, closeList]
  );

  const handleInputChange = (e) => {
    const v = e.target.value;
    setInputValue(v);
    setOpen(true);
    if (v === '') validateC('');
  };

  /** Si el texto coincide exactamente con un país, dispara la API al instante (sin elegir de la lista). */
  useEffect(() => {
    const q = inputValue.trim();
    if (!q) return;
    const list = countries || [];
    if (!list.length) return;
    const match = list.find((c) => normalize(c.name_en) === normalize(q));
    if (!match) return;
    if (normalize(match.name_en) === normalize(selectedCountry || '')) return;
    validateC(match.name_en);
  }, [inputValue, countries, selectedCountry, validateC]);

  const applyIfExactMatch = useCallback(() => {
    const q = inputValue.trim();
    if (!q) {
      validateC('');
      return;
    }
    const list = countries || [];
    const match = list.find((c) => normalize(c.name_en) === normalize(q));
    if (match) {
      validateC(match.name_en);
      setInputValue(match.name_en);
    }
    closeList();
  }, [inputValue, countries, validateC, closeList]);

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant="h6" component="h2" className={classes.title}>
        Explorar ligas
      </Typography>
      <Typography variant="body2" className={classes.subtitle}>
        Escribe o elige un país para ver sus competiciones al instante.
      </Typography>
      <ClickAwayListener onClickAway={closeList}>
        <div ref={anchorRef}>
          <TextField
            label="País"
            placeholder="Buscar país…"
            variant="outlined"
            fullWidth
            margin="none"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setOpen(true)}
            onBlur={applyIfExactMatch}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                applyIfExactMatch();
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {inputValue ? (
                    <IconButton size="small" aria-label="Limpiar" onClick={handleClear}>
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  ) : null}
                </InputAdornment>
              ),
            }}
          />
          <Popper
            open={open && Boolean(anchorRef.current)}
            anchorEl={anchorRef.current}
            placement="bottom-start"
            style={{ width: anchorRef.current ? anchorRef.current.offsetWidth : undefined, zIndex: 1300 }}
          >
            <Paper className={classes.listPaper} elevation={3}>
              {filtered.length === 0 ? (
                <div className={classes.hint}>Sin coincidencias</div>
              ) : (
                <>
                  {!inputValue.trim() && (
                    <div className={classes.hint}>
                      Primeros resultados — sigue escribiendo para acotar.
                    </div>
                  )}
                  <List dense component="nav" disablePadding>
                    {filtered.map((c) => (
                      <ListItem
                        key={`${c.name_en}-${c.flag_url_32 || 'x'}`}
                        button
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => handleSelect(c)}
                      >
                        <ListItemIcon style={{ minWidth: 44 }}>
                          {c.flag_url_32 ? (
                            <img
                              className={classes.flag}
                              src={c.flag_url_32}
                              alt=""
                              loading="lazy"
                            />
                          ) : (
                            <span className={classes.flagPlaceholder} />
                          )}
                        </ListItemIcon>
                        <ListItemText primary={c.name_en} />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </Paper>
          </Popper>
        </div>
      </ClickAwayListener>
    </Paper>
  );
};

export default SearchLeagues;
