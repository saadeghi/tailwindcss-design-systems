module.exports = {
    '.form-group': {
        backgroundColor: '#f5f5f5',
        borderRadius: '4px 4px 0 0',
        display: 'inline-flex',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
        willChange: 'opacity,transform,color',
        '.form-control': {
            borderBottomColor: '#0000006b',
            color: '#000000de',
            letterSpacing: '.009375em',
            textDecoration: 'inherit',
            textTransform: 'inherit',
            alignSelf: 'flex-end',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            padding: '20px 16px 6px',
            transition: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            border: 'none',
            borderBottom: '1px solid',
            borderRadius: '0',
            background: 'none',
            appearance: 'none',
        },
        'label': {
            color: '#0009',
            left: '16px',
            right: 'initial',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            fontWeight: '400',
            letterSpacing: '.009375em',
            textDecoration: 'inherit',
            textTransform: 'inherit',
            position: 'absolute',
            transformOrigin: 'left top',
            transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            lineHeight: '1.15rem',
            textAlign: 'left',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            cursor: 'text',
            overflow: 'hidden',
            willChange: 'transform',
        }
    },
}