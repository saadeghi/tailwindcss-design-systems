module.exports = {
    '.btn': {
        fontSize: '.875rem',
        lineHeight: '2.25rem',
        fontWeight: '500',
        letterSpacing: '.0892857143em',
        textDecoration: 'none',
        textTransform: 'uppercase',
        padding: '0 8px 0 8px',
        display: 'inline-flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        minWidth: '64px',
        border: 'none',
        outline: 'none',
        lineHeight: 'inherit',
        userSelect: 'none',
        overflow: 'visible',
        verticalAlign: 'middle',
        borderRadius: '4px',
        boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12)',
        transition: 'box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '0 16px 0 16px',
        height: '36px',
        '&:hover': {
            textDecoration: 'none',
            cursor: 'pointer',
            boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0,0,0,.12)',
        },
        '&-primary': {
            color: '#fff',
            backgroundColor: '#6200ee',
            '&:hover': {
                boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0,0,0,.12)',
            },
        },
        '&-secondary': {
            color: '#fff',
            backgroundColor: '#6c757d',
            borderColor: '#6c757d',
            '&:hover': {
                backgroundColor: '#5a6268',
                borderColor: '#545b62',
            },
        },
        '&-success': {
            color: '#fff',
            backgroundColor: '#28a745',
            borderColor: '#28a745',
            '&:hover': {
                backgroundColor: '#218838',
                borderColor: '#1e7e34',
            },
        },
        '&-danger': {
            color: '#fff',
            backgroundColor: '#dc3545',
            borderColor: '#dc3545',
            '&:hover': {
                backgroundColor: '#c82333',
                borderColor: '#bd2130',
            },
        },
        '&-warning': {
            color: '#212529',
            backgroundColor: '#ffc107',
            borderColor: '#ffc107',
            '&:hover': {
                backgroundColor: '#e0a800',
                borderColor: '#d39e00',
            },
        },
        '&-info': {
            color: '#fff',
            backgroundColor: '#17a2b8',
            borderColor: '#17a2b8',
            '&:hover': {
                backgroundColor: '#138496',
                borderColor: '#117a8b',
            },
        },
        '&-light': {
            color: '#212529',
            backgroundColor: '#f8f9fa',
            borderColor: '#f8f9fa',
            '&:hover': {
                color: '#212529',
                backgroundColor: '#e2e6ea',
                borderColor: '#dae0e5',
            },
        },
        '&-dark': {
            color: '#fff',
            backgroundColor: '#343a40',
            borderColor: '#343a40',
            '&:hover': {
                color: '#fff',
                backgroundColor: '#23272b',
                borderColor: '#1d2124',
            },
        },
        '&-link': {
            color: '#007bff',
            backgroundColor: '#0000',
            boxShadow: 'none',
            '&:hover': {
                color: '#0056b3',
                backgroundColor: '#0000',
                boxShadow: 'none',
            },
        },
    },
}