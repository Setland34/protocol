export function openPopup({ url, height = 800, width = 460 }) {
  const left = Math.round((window.screen.width - width) / 2);
  const top = Math.round((window.screen.height - height) / 2);

  const windowFeatures = `width=${width},height=${height},resizable,scrollbars=yes,status=1,left=${left},top=${top}`;
  window.open(url, '_blank', windowFeatures);
}
