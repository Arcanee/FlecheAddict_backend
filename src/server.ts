import app from '#src/app.ts';

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, (): void => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`Listening on port ${PORT}`);
});
