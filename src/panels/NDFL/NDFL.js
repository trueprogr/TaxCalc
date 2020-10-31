import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import React from 'react'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

import {FormLayout,FormLayoutGroup,Input,SelectMimicry,View,Root,Group,List,Cell} from '@vkontakte/vkui';
import Icon24Done from '@vkontakte/icons/dist/24/done'

const styles = {
    btn: {
        marginTop:'.5rem'
    }  
}

const osName = platform();

const NDFL = props =>{
    const [country,setCountry] = React.useState('');
    const [activeViewq,setActiveView] = React.useState('profile');
    return (
        <Panel id={props.id}>
            <Root activeView={activeViewq}>
            <View activePanel="profilePanel" id="profile">
                <Panel id="profilePanel">
                    <PanelHeader
                        left={<PanelHeaderButton onClick={props.go} data-to="home"> 
                            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                        </PanelHeaderButton>}
                    >
                        Расчет НДФЛ 
                    </PanelHeader>

                        <FormLayout>
                            <SelectMimicry
                            top="Выберите страну"
                            placeholder="Не выбрана"
                            onClick={() => setActiveView('countries')}
                            >{country}</SelectMimicry>

                            <FormLayoutGroup top="Сумма">
                                <Input type="text" />
                            </FormLayoutGroup>

                            <FormLayoutGroup top="Ставка(%)">
                                <Input type="text" />
                            </FormLayoutGroup>
                        </FormLayout>
                    
                    <Div style={styles.btn}>
                        <Button size="xl" level="2">
                            Рассчитать налог
                        </Button>
                    </Div>
                    
                </Panel>
            </View>

            <View activePanel="countriesPanel" id="countries">
                <Panel id="countriesPanel">
                    <PanelHeader>
                        Выбор страны
                    </PanelHeader>
                    <Group>
                        <List>
                        <Cell
                            onClick={() => {setCountry('Россия'); setActiveView('profile')}}
                            asideContent={country === 'Россия' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Россия
                        </Cell>
                        <Cell
                            onClick={() => {setCountry('Италия'); setActiveView('profile')}}
                            asideContent={country === 'Италия' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Италия
                        </Cell>
                        <Cell
                            onClick={() => {setCountry('Англия'); setActiveView('profile')}}
                            asideContent={country === 'Англия' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Англия
                        </Cell>
                        </List>
                    </Group>
                </Panel>
            </View>
        </Root>
        </Panel>
    );
}

export default NDFL