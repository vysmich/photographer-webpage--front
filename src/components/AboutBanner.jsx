function AboutBanner(props) {
  const title = props.aboutBannerData.Title;
  console.log(props);
  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default AboutBanner;
