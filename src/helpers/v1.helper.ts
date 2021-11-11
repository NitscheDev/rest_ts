
export const startServer = (app: any, port: number, host: string) => {
    if (!port || !host) throw new Error('SERVER: port & host is required');
    app.listen(port, host, () => {
        console.log(`Server started at: http://${host}:${port}`);
    });
};