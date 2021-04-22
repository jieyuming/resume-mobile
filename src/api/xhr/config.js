let rootPath = '';
if (process.env.NODE_ENV.trim() === 'development') {
    rootPath = 'https://dev/unicomlottery'
} else if(process.env.NODE_ENV.trim() ==='testing'){
    rootPath = 'https://test/unicomlottery'
} else {
    rootPath = 'https://prod/unicomlottery'
}
export { rootPath };