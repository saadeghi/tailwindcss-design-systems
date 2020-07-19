module.exports = {
    '.card': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '0',
        wordWrap: 'break-word',
        backgroundClip: 'border-box',
        border: '1px solid #00000020',
        borderRadius: '.25rem',
        '.card-img-top': {
            width: '100%',
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit',
        },
        '.card-body': {
            flex: '1 1 auto',
            padding: '1.25rem',
        },
        '.card-title': {
            marginBottom: '.75rem',
        },
    },
}
