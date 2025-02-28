/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { Form } from '@unform/web';
import { TextField } from 'unform-material-ui';

import Atividade from '../components/Atividade';
import LeftMenu from '../components/LeftMenu';

import '../styles/pages/Search.scss';

function ResponsiveDrawer() {
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const atividadeExemplo = {
    componentesCurriculares: 'Matemática',
    objetivos: 'Associar uma equação linear de 1º grau com duas incógnitas a uma reta no plano cartesiano.',
    serie: '8º ano',
    duracao: '2 horas',
    assunto: 'Equação linear de 1º grau no plano cartesiano',
    conteudo: 'Linguagem algébrica',
    atividade: `Na atividade de Equação Linear do 1º Grau no Plano Cartesiano

    Seu seu robô é um educador, responda a questão abaixo usando-o:

    1) Esboço um gráfico de uma função Linear do 1º Grau no Plano Cartesiano, no qual tem uma função Y= X+2.

    Quando X = 0,
    Y = 2.

    Quando X = 1,
    Y = 3.

    2) Sendo assim,  o robô vai passar nas cordenadas de X e Y no gráfico.`,
    robos: [
      {
        nome: 'Robô educador',
        pecas: [
          {
            nome: 'L1', quantidade: 3, imagem: 'http...', descricao: 'Essa peça é feita em tal tal e faz tal tal',
          },
          {
            nome: 'R2', quantidade: 2, imagem: 'http...', descricao: 'Essa peça é feita em tal tal e faz tal tal',
          },

        ],
      }],
    programacao: [
      {
        nome: 'Tarefa de star', descricao: 'Na tarefa de Start marca o início da sequência de programação fazendo com que o programa inicie automaticamente. Um projeto que não inicie com o bloco start, nenhum bloco de comando será executado.', quantidade: 1, imagem: 'http...',
      },
      {
        nome: 'Bloco de movimento', descricao: 'Esse bloco é tal tal', quantidade: 1, imagem: 'http...',
      },
      {
        nome: 'Bloco de finalizacao', descricao: 'Esse bloco é tal tal', quantidade: 5, imagem: 'http...',
      },
      {
        nome: 'Bloco de inicio', descricao: 'Esse bloco é tal tal', quantidade: 3, imagem: 'http...',
      },
    ],
    recursosDidaticos: 'Pincel, datashow, quadro, kit da lego',
    referencia: 'Descrição e link quem inventou, pessoas importantes relacionadas',
    likes: 25,
    dislikes: 4,
    views: 298,
  };
  const [atividades, setAtividades] = useState([]);
  function toggleAdvanced() {
    setIsAdvanced(!isAdvanced);
  }

  function buscarDados() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAtividades([atividadeExemplo, atividadeExemplo, atividadeExemplo, atividadeExemplo]);
    }, 2000);
  }

  const disciplines = ['Matemática', 'Históra'];
  const [selectedDisciplines, setSelectedDisciplines] = useState([]);
  const hcDiscs = (event) => setSelectedDisciplines(event.target.value);

  const series = ['6º ano', '7º ano', '8º ano'];
  const [selectedSeries, setSelectedSeries] = useState([]);
  const hcSeries = (event) => setSelectedSeries(event.target.value);

  const conteudos = ['Números', 'Álgebra', 'Geometria', 'Grandezas', 'Estatística'];
  const [selectedConteudos, setSelectedConteudos] = useState([]);
  const hcConts = (event) => setSelectedConteudos(event.target.value);

  const assuntos = ['Linguagem algébrica', 'Equivalência de expressões algébricas', 'Problemas envolvendo grandezas diretamente proporcionais e grandezas inversamente proporcionais', 'Equações polinomiais do 1º grau'];
  const [selectedAssuntos, setSelectedAssuntos] = useState([]);
  const hcAssunts = (event) => setSelectedAssuntos(event.target.value);

  const MyLoader = () => (
    <ContentLoader
      speed={2}
      width={900}
      height={250}
      viewBox="0 0 900 250"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="17" rx="3" ry="3" width="881" height="31" />
      <rect x="199" y="75" rx="3" ry="3" width="92" height="22" />
      <rect x="8" y="76" rx="3" ry="3" width="123" height="21" />
      <rect x="13" y="261" rx="3" ry="3" width="37" height="22" />
      <rect x="13" y="115" rx="3" ry="3" width="140" height="11" />
      <rect x="168" y="115" rx="3" ry="3" width="173" height="11" />
      <rect x="3" y="216" rx="0" ry="0" width="41" height="21" />
      <rect x="59" y="216" rx="0" ry="0" width="43" height="21" />
      <rect x="121" y="217" rx="0" ry="0" width="41" height="22" />
      <rect x="10" y="141" rx="0" ry="0" width="328" height="13" />
      <rect x="380" y="76" rx="0" ry="0" width="144" height="22" />
      <rect x="652" y="76" rx="0" ry="0" width="227" height="23" />
    </ContentLoader>
  );

  return (
    <div className="search-page">
      <CssBaseline />
      <LeftMenu />
      <main className="page-content">
        <Form onSubmit={() => {
          buscarDados();
        }}
        >
          <Grid container className="simple-search">
            <Grid item className="search-field" xs={12} sm={8}>
              <TextField
                size="small"
                className="textfield"
                name="search"
                label="Sua busca"
                variant="outlined"
              />
            </Grid>
            <Grid item className="search-field" xs={12} sm={4}>
              <Grid container style={{ width: '100%' }}>
                <Grid item class="search-search" xs={8} sm={8}>
                  <Button
                    className="submit"
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Buscar
                  </Button>
                </Grid>
                <Grid item class="search-advanced" xs={4} sm={4}>
                  <Button
                    className="submit"
                    variant="contained"
                    color="secundary"
                    onClick={() => toggleAdvanced()}
                  >
                    Avançado
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            { isAdvanced && (
              <div className="advanced-fields">
                <div className="disciplines">
                  <div className="advanced-section-name"> Disciplinas: </div>
                  <Select
                    multiple
                    name="discipline"
                    label="Disciplinas"
                    className="select-chips"
                    value={selectedDisciplines}
                    onChange={hcDiscs}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </div>
                    )}
                  >{disciplines.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                  </Select>
                </div>
                <div className="disciplines">
                  <div className="advanced-section-name"> Série: </div>
                  <Select
                    multiple
                    name="discipline"
                    label="Disciplinas"
                    className="select-chips"
                    value={selectedSeries}
                    disabled={!selectedDisciplines.length}
                    onChange={hcSeries}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </div>
                    )}
                  >{series.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                  </Select>
                </div>
                <div className="disciplines">
                  <div className="advanced-section-name"> Conteúdos: </div>
                  <Select
                    multiple
                    name="discipline"
                    label="Disciplinas"
                    className="select-chips"
                    value={selectedConteudos}
                    disabled={!selectedSeries.length}
                    onChange={hcConts}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </div>
                    )}
                  >{conteudos.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                  </Select>
                </div>
                <div className="disciplines">
                  <div className="advanced-section-name"> Assunto: </div>
                  <Select
                    multiple
                    name="discipline"
                    label="Disciplinas"
                    className="select-chips"
                    value={selectedAssuntos}
                    disabled={!selectedConteudos.length}
                    onChange={hcAssunts}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={value}
                          />
                        ))}
                      </div>
                    )}
                  >{assuntos.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                  </Select>
                </div>
              </div>
            ) }
          </Grid>
        </Form>
        <Divider />
        <Grid className="results" container>
          {!isLoading && (atividades).map((atv) => (
            <Atividade atividade={atv} />
          ))}
          {
              isLoading && (
              <div className="loading-examples">
                <div className="skeleton"><MyLoader /></div>
                <Divider />
                <div className="skeleton"><MyLoader /></div>
                <Divider />
                <div className="skeleton"><MyLoader /></div>
                <Divider />
                <div className="skeleton"><MyLoader /></div>
                <Divider />
                <div className="skeleton"><MyLoader /></div>
                <Divider />
                <div className="skeleton"><MyLoader /></div>
              </div>
              )
          }
        </Grid>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
