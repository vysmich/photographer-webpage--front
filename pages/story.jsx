function story() {
  return <h1>About</h1>;
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default story;
