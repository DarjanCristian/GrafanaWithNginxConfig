const MyIframeComponent = () => {
  const iframeSrc = `/api/grafana`;

  return (
    <iframe
      src={iframeSrc}
      width="600"
      height="400"
      title="Embedded Content"
    />
  );
};

export default MyIframeComponent;
