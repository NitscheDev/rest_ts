
export const protect = (req: any, res: any, next?: any) => {
    const apiKey = req.get('X-API-KEY');
    if (!apiKey) return res.status(401).json({
        message: 'Api key is required.',
        status: 'Access Denied'
    });
    if (apiKey !== '12345') return res.status(401).json({
        message: 'Api key is invalid',
        status: 'Invalid Key'
    });
    next();
}