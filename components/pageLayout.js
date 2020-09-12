import Link from 'next/link'
import Head from 'next/head';
import Footer from './Footer';
import NavigationBar from './NavigationBar';


const Layout = (props) => (
    <div>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <title>Nikita Batlis | Web Developer and UX/UI Designer</title>
            <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon/favicon32px.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon/favicon16px.png" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
        </Head>

        <div>
            <NavigationBar />
            <div className="wrapper">
                {props.children}
            </div>
            <Footer />
        </div>

        <style global jsx>{`

            .wrapper {
                min-height: 90vh;
                margin: 0 0 2em 0;
            }

        `}</style>


   </div>
)
 
export default Layout;
 