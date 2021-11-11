
export const root = (req: any, res: any) => {
    return res.status(200).json({
        message: 'Welcome to an typescript REST API',
        author: 'NitscheDev - Rasmus Nitsche'
    });
}

export const privateRoute = (req: any, res: any) => {
    return res.status(200).json({
        message: 'Welcome to an protected route of the typescript REST API',
        author: 'NitscheDev - Rasmus Nitsche'
    });
}