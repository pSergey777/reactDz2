import React from 'react';
import {fireEvent, render, act} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {ReduxTestExample, ReduxTestExampleTestIds} from "./index";
import {Provider} from "react-redux";
import {createAppStore} from "../../store";
import {delay} from "../../helpers/delay";
import {playersApi} from "../../api";

jest.mock('../../api/request/players.js')


const Wrapper = store => (props) => <MemoryRouter><Provider {...props} store={store}/></MemoryRouter>

describe('ReduxTestExample', () => {

  it('добавление игроков в список', async () => {
    const store = createAppStore();

    const component = render(<ReduxTestExample />, {
      wrapper: (props) => <MemoryRouter>
        <Provider {...props} store={store}/>
      </MemoryRouter>,
      // или
      // wrapper: Wrapper(store)
    })

    act(() => {
      fireEvent.click(component.getByTestId(ReduxTestExampleTestIds.addPlayerButton));
    })
    act(() => {
      fireEvent.click(component.getByTestId(ReduxTestExampleTestIds.addPlayerButton));
    })

    expect(component.getAllByTestId(ReduxTestExampleTestIds.playerName)).toHaveLength(2);
  })

  it('отправка на сервер', async () => {
    const store = createAppStore();

    const component = render(<ReduxTestExample />, {
      wrapper: Wrapper(store)
    })

    fireEvent.click(component.getByTestId(ReduxTestExampleTestIds.sendPlayerButton));

    await delay(1000);

    expect(playersApi.sendPlayers).toHaveBeenLastCalledWith([]);

  })

})
