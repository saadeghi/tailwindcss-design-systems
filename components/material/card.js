module.exports = {
    '.card': {
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12)',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        wordWrap: 'break-word',
        '.card-img-top': {
            width: '100%',
            position: 'relative',
            boxSizing: 'border-box',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit',
        },
        '.card-body': {
            flex: '1 1 auto',
            padding: '1rem',
        },
        '.card-title': {
            marginBottom: '1rem',
        },
    },
}
