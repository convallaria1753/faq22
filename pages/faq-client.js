import Link from 'next/link';

export default function faqClient({ data }) {
  return (
    <div className="text-2xl flex flex-col justify-center gap-5 max-w-xl mx-auto mt-9 border p-7 rounded-lg border-cyan-600">
      <h1 className="self-center">FAQ Client</h1>
      <ul>
        {data.map((faq) => (
          <li className="pb-2 hover:text-cyan-800" key={faq.id}>
            <Link href={`/faq/[id]`} as={`/faq/${faq.id}`}>
              <a>{faq.attributes.question}</a>
            </Link>
            {faq.name}
          </li>
        ))}
      </ul>
      <h2 className="self-center">
        <Link href="/">
          <a className="text-cyan-600 hover:text-rose-300">Back to home</a>
        </Link>
      </h2>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const response = await fetch(
      'https://cms.primecarers.co.uk/api/question-answers',
      {
        headers: {
          Authorization:
            'Bearer    5c1542445b87f2cafb4354feb1e86f951f86769aabfb4d9472e84b3af6e5360197329cfae74b44361122d5e5fc4b8abe7db511f67dec963f48484cbbc7b6a5d5932aa5819c87ae85a9dbdaf34e8e72446b28b1cedaa8588920b644fb77139abde4740e88153981acad160362da7206bafedef4e226012161c059c11e15434dd3',
        },
      }
    );
    const responseData = await response.json();
    const dataAll = responseData.data;
    const data = dataAll.filter(el => el.attributes.audience === 'client');

    return {
      props: { data },
    };
  } catch {
      return {
        notFound: true,
      };
  }
}
