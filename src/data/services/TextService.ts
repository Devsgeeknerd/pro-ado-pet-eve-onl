export const TextService = {
  Limit__Text(text: string, maximum__size: number): string {
    if (text.length < maximum__size) {
      return text;
    }
  },
};
