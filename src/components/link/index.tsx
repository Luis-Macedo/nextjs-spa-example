import NextLink from 'next/link'

const Link = ({children, href,...props}: any) => {
    return(
        <NextLink href={href} passHref>
            <a {...props}>{children}</a>
        </NextLink>
    )
}

export default Link