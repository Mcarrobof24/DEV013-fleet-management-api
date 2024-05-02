import app from "./app";



/*app.use('/', (req: Request, res: Response): void => {
    res.send('Hello world!');
});*/

app.listen(app.get('port'), (): void => {
    console.log('SERVER IS UP ON PORT:', `${app.get('port')}`);
});