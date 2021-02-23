import React from 'react';
import { getByTestId, fireEvent, render, getByText, waitFor, screen } from '../../test/jest/utils/test-utils';
import MovieEditor from "./MovieEditor";


describe('testing Add form', () => {


    const mockSubmit = jest.fn(e => e.preventDefault())


    const values = {
        title : 'Star Wars: Rogue One',
        poster_path: 'https://i.pinimg.com/736x/3b/8e/fa/3b8efa7b7d53677d98d723ed122f6a0f.jpg',
        release_date: '2016-01-01',
        genres: ['Fantasy'],
        overview: 'Сопротивление собирает отряд для выполнения особой миссии - надо выкрасть чертежи самого совершенного и смертоносного оружия Империи. Возглавляет бойцов неуправляемая и бесстрашная Джин Эрсо, у которой в этом самоубийственном задании есть и личные мотивы. Не всем суждено вернуться домой, но герои готовы к этому, ведь на кону судьба Галактики.',
        runtime: '133 ',
    }

    const genresList = ['Crime', 'Documentary', 'Horror', 'Comedy']

    const { container } = render(<MovieEditor testSubmitHandler={mockSubmit}/>)


    const title = getByTestId(container, 'title')
    const release_date = getByTestId(container, 'release_date')
    const poster_path = getByTestId(container, 'poster_path')
    const genres = genresList.map(elem => getByTestId(container, `${elem}`))
    const overview = getByTestId(container, 'overview')
    const runtime = getByTestId(container, 'runtime')

    const submitBtn = getByText(container, 'save')
    const resetBtn = getByText(container, 'reset')

    // afterEach(() => {
    //     mockSubmit.mockClear()
    // })


    it('AddMovie renders with blank fields', () => {


        expect(title.tagName).toBe('INPUT')
        expect(release_date.tagName).toBe('INPUT')
        expect(poster_path.tagName).toBe('INPUT')
        genres.forEach(elem => expect(elem.tagName).toBe('INPUT'))
        expect(overview.tagName).toBe('INPUT')
        expect(runtime.tagName).toBe('INPUT')
        expect(submitBtn.tagName).toBe('BUTTON')
    })

    it('clicking on submit button after entering values',  () => {
        fireEvent.change(title, {target: {value: values.title}})
        fireEvent.change(release_date, {target: {value: values.release_date}})
        fireEvent.change(poster_path, {target: {value: values.poster_path}})
        fireEvent.change(overview, {target: {value: values.overview}})
        fireEvent.change(runtime, {target: {value: values.runtime}})


        expect(title.value).toEqual(values.title)
        expect(release_date.value).toEqual(values.release_date)
        expect(poster_path.value).toEqual(values.poster_path)
        expect(overview.value).toEqual(values.overview)
        expect(runtime.value).toEqual(values.runtime)
    })

    it('submit button onclick calls submit function', () => {
        fireEvent.click(submitBtn)
        expect(mockSubmit).toHaveBeenCalledTimes(1)
    })

    it('reset button changes values into the inputs to empty string', () => {
        fireEvent.click(resetBtn)

        expect(title.value).toEqual('')
        expect(release_date.value).toEqual('')
        expect(poster_path.value).toEqual('')
        expect(overview.value).toEqual('')
        expect(runtime.value).toEqual('')

        screen.debug()
    })

})

