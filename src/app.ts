function app(number1?: number, number2?: number): number {
  return (number1 || 0) + (number2 || 0);
}

export default app;
