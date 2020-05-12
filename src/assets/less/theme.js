async function setTheme (name) {
        const head = document.head;
        const link  = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = `../less/${name}/public/theme.less`;
        head.appendChild(link)
}

export default setTheme