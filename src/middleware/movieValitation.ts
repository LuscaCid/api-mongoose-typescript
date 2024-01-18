import {body} from 'express-validator'

export const ensureMovie = () => {
    return [
        body('title')
        .isString()
        .withMessage("o titulo é obrigatorio"),

        body('description')
        .isString()
        .withMessage('Preencha a descrição'),

        body('rating')
        .isNumeric()
        .withMessage("Passe uma avaliação valida")
        .custom((value : number) => {
            if(!(value >= 0 && value <= 10))return false
            else return true
        })
        .withMessage("A nota tem de ser maior ou igual a zero ou menor igual a dez"),
        
    ]
}

/**
 * para criar validacoes que fogem da abrangencia do express validator, posso passar um metodo custom que tem que retornar uma boolean, de true or false para saber se passa ou nao para a next function e dessa forma continuer com a requisicao ou se cai no erro
 */