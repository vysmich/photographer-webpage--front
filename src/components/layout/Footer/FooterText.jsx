function FooterText(props) {
  const text = props.text;
  return (
    <p className=" mb-4 h-full w-full max-w-xs px-8 text-center sm:mb-0 lg:py-12">
      {text}
    </p>
  );
}

export default FooterText;
