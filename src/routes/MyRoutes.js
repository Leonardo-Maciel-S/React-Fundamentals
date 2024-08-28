import React from "react";
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function MyRoute({ component: Component, isClosed, ...rest }){
    const isLoggedId = false // simulando um cliente deslogado.

    if (isClosed && !isLoggedId) { // verificando se é rota privada e se esta logado ou não.
        return (
            <Redirect // redirecionando o usuário para a página de login
                to={{ pathname: '/login', state: { prevPath: rest.location.pathname }}}
            />
        )
    }
    return <Route {...rest} component={Component} /> //renderizando a página caso ele passe pela verificação
}

MyRoute.defaultProps = { // definindo valor padrão para props
    isClosed: false,
}

MyRoute.propTypes = { // determinando tipo de dado esperado para cada props.
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool,
}
