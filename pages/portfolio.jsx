function portfolio() {
  return <h1>portfolio</h1>;
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default portfolio;
