import React from "react"
import {
    Flex,
    Text,
    Box,
    Link
} from "rebass"

function Navbar() {
    return (
        <Flex
        px={4}
        color='white'
        bg='black'
        alignItems='center'>
            <Text p={2} fontWeight='bold'>grog.finance</Text>
            <Box mx='auto' />
            <Link variant='nav' href='/user/profile'>
                Profile
            </Link>
            <Link variant='nav' href='/peepee'>
                Beer Feed
            </Link>
        </Flex>
    )
}

export default Navbar