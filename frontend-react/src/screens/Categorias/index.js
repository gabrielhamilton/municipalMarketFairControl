import React, { PureComponent, Fragment } from 'react';

import { 
    Button, Popconfirm, Modal,
    Tag, Divider,
} from 'antd';

import CategoriasForm from './CategoriasForm';
import Subcategorias from './Subcategorias';
import ContentComponent from '../../components/ContentComponent';
import TabelaComponent from '../../components/TabelaComponent';
import * as categoriasAPI from '../../api/categoria';

export default class CategoriasScreen extends PureComponent {

    state = {
        categorias: [],
        visible: false,
        loading: true,
        selectedCategoria: {},
    };

    componentDidMount() {
        this._loadCategorias();
    }
    
    _loadCategorias = async () => {
        this.setState({ loading: true });
        const categorias = await categoriasAPI.get();
        this.setState({ categorias, loading: false });
    }

    _onDeleteCategoria = async id => {
        await categoriasAPI.del(id)
            .then(() => {
                this._loadCategorias();
            });
    }

    showModal = categoria => {
        this.setState({
            visible: true,
            selectedCategoria: categoria,
        });
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
            selectedCategoria: {},
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
            selectedCategoria: {},
        });
    }

    _renderModal = () => {
        const { visible, selectedCategoria } = this.state;

        if (!visible) return null;

        return (
            <Modal
                title={ selectedCategoria && selectedCategoria.id
                    ? `#${selectedCategoria.id} - ${selectedCategoria.nome}`
                    : 'Adicionar uma nova categoria'
                }
                visible={visible}
                onCancel={this.handleCancel}
                footer={null}
                >
                    <CategoriasForm 
                        categoria={selectedCategoria}
                        onSuccess={this.handleOk}
                        refresh={this._loadCategorias}
                    />
                    {
                        selectedCategoria && selectedCategoria.id
                            ? (
                                <Fragment>
                                    <Divider>
                                        Subcategorias
                                    </Divider>
                                    <Subcategorias categoria={selectedCategoria} />
                                </Fragment>
                            ) : null
                    }
            </Modal>
        );
    }

    render() {
        const { categorias, loading } = this.state;

        const colunas = [
            {
                key: 'id',
                dataIndex: 'id',
                title: '#',
                width: 60,
            },
            {
                key: 'nome',
                dataIndex: 'nome',
                title: 'Nome',
            },
            {
                key: 'cnpj',
                dataIndex: 'need_cnpj',
                title: 'Requer CNPJ',
                width: 70,
                render: need_cnpj => {
                    return need_cnpj === 1
                        ? <Tag color="#87d068">Sim</Tag>
                        : <Tag color="#2db7f5">Não</Tag>
                }
            },
            {
                key: 'acoes',
                title: 'Ações',
                render: linha => (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button type="primary" onClick={() => this.showModal(linha)}>
                            Detalhes
                        </Button>
                        <Popconfirm
                            title="Você quer deletar esta categoria?"
                            okText="Sim"
                            cancelText="Não"
                            onConfirm={() => this._onDeleteCategoria(linha.id)}
                        >
                            <Button shape="circle" icon="delete" type="danger" />
                        </Popconfirm>
                    </div>
                ),
                width: 160,
            },
        ];

        return (
            <Fragment>
                <ContentComponent
                    buttonProps={{
                        text: 'Adicionar',
                        onClick: this.showModal,
                        type: 'primary',
                        icon: 'plus',
                    }}
                    title="Categorias"
                >
                    <TabelaComponent
                        linhas={categorias} 
                        colunas={colunas}
                        size="small"
                        loading={loading}
                        pagination={{
                            pageSize: 15,
                        }}
                    />
                    { this._renderModal() }
                </ContentComponent>
            </Fragment>
           
        );
    }

}
