export default function (error: string): string {
  switch (error) {
    case 'auth/user-not-found':
      return 'Usuário não encontrado.';
      break;

    default:
      return 'Error';
      break;
  }
}
