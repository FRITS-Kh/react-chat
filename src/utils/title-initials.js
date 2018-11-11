export default function titleInitials(title) {
  if (typeof title !== 'string') {
    return '';
  }
  try {
    return title
      .split(' ')
      .map(word => word[0] || '')
      .map(char => char.toUpperCase())
      .slice(0, 2)
      .join('');
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
    return 'dogy';
  }
}
