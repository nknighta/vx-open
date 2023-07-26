import Head from 'next/head'
import {DefaultSeo} from 'next-seo';
import {requirePage} from "next/dist/server/require";

const HMeta = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight,
}: {
    pageTitle?: string
    pageDescription?: string
    pagePath?: string
    pageImg?: any
    pageImgWidth?: number
    pageImgHeight?: number
}) => {
  const defaultTitle = 'VARIUS'
  const defaultDescription = 'Web3 development'
  const defaultImg = '/favicon.ico'
  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
  const description = pageDescription ? pageDescription : defaultDescription
  const url = pagePath
  const imgUrl = pageImg ? pageImg : defaultImg
  const imgWidth = pageImgWidth ? pageImgWidth : 1280
  const imgHeight = pageImgHeight ? pageImgHeight : 640
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <meta name="twitter:card" content={imgUrl} />
        <link rel="icon" href={"https://varius.technology/favicon.ico"} sizes="any" />
      <link rel="canonical" href={url} />
        <DefaultSeo
            title={title}
            openGraph={{
                url: url,
                title: title,
                description: description,
                images: [
                    {
                        url: imgUrl,
                        width: imgWidth,
                        height: imgHeight,
                        alt: title,
                        type: 'image/png'
                    }
                ]
            }}
            twitter={{
                handle: '@ama_dev_1',
                site: url,
                cardType: 'summary_large_image',
            }}
        />
    </Head>
  )
}

export default HMeta;