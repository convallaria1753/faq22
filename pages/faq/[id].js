import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Faq({ faqItem }) {
	const router = useRouter();
  const markdownTitle = `<h1>${faqItem.attributes.question}</h1>`;
  const markdownItem = `<p>${faqItem.attributes.answer}</p>`;
  const styleObjTitle = {
    color: 'rgb(21 94 117)',
  };
  const styleObjItem = {

  };

	return (
    <>
      <div className="text-2xl flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto my-9 border p-7 rounded-lg">
        <div
          dangerouslySetInnerHTML={{ __html: markdownTitle }}
          style={styleObjTitle}
        />
        <div
          dangerouslySetInnerHTML={{ __html: markdownItem }}
          style={styleObjItem}
        />
        <h2>
          <Link href="/">
            <a className="text-cyan-600 hover:text-rose-300">Back to home</a>
          </Link>
        </h2>
      </div>
    </>
  );
}

Faq.getInitialProps = async (context) => {

  try {
    const response = await fetch(
      `https://cms.primecarers.co.uk/api/question-answers`,
      {
        headers: {
          Authorization: `Bearer    5c1542445b87f2cafb4354feb1e86f951f86769aabfb4d9472e84b3af6e5360197329cfae74b44361122d5e5fc4b8abe7db511f67dec963f48484cbbc7b6a5d5932aa5819c87ae85a9dbdaf34e8e72446b28b1cedaa8588920b644fb77139abde4740e88153981acad160362da7206bafedef4e226012161c059c11e15434dd3`,
        },
      }
    );

    const responseData = await response.json();
    const data = responseData.data;
    const faqItem = data.find((el) => el.id == context.query.id);

    return {
      faqItem,
    };

  } catch (e) {
    return {
      notFound: true,
    };
  }
};
