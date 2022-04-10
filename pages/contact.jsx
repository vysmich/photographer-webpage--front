function contact() {
  return <h1>contact</h1>;
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default contact;
