function services() {
  return <h1>services</h1>;
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default services;
