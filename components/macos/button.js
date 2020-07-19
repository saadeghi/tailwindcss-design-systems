module.exports = {
    '.btn': {
        display: 'inline-block',
        margin: '0',
        border: '1px solid #888888',
        padding: '3px 10px',
        color: '#434343',
        borderRadius: '4px',
        background: 'linear-gradient(to top, #d6d6d6, #f6f6f6)',
        cursor: 'pointer',
        textDecoration: 'none',
        outline: 'none',
        '&:active': {
            color: '#ededed',
            background: 'linear-gradient(to top, #7d7d7d, #a1a1a1)',
        },
        '&-primary': {
            color: '#fff',
            background: 'linear-gradient(to top, #147bfe, #67acf9)',
            border: '1px solid #0654fe',
            '&:active': {
                color: '#0654fe',
                background: 'linear-gradient(to top, #d6d6d6, #f6f6f6)',
            },
        },
    },
}
