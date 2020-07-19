module.exports = {
    '.btn': {
        display: 'inline-block',
        fontWeight: '400',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        userSelect: 'none',
        border: '1px solid #0000',
        padding: '.375rem .75rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        borderRadius: '.25rem',
        transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
        '&:hover': {
            textDecoration: 'none',
        },
        '&-primary': {
            color: '#fff',
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            '&:hover': {
                backgroundColor: '#0069d9',
                borderColor: '#0062cc',
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
            '&:hover': {
                color: '#0056b3',
                textDecoration: 'underline',
                backgroundColor: '#0000',
                borderColor: '#0000',
            },
        },
    },
}
