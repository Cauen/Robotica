/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Visibility from '@material-ui/icons/Visibility';

import * as SagaActions from '../sagas/actions';

export default function Atividade({ atividade }) {
  const dispatch = useDispatch();
  function like() {
    dispatch(SagaActions.Success('Like dado para a atividade'));
  }

  function dislike() {
    dispatch(SagaActions.Success('Dislike dado para a atividade'));
  }
  return (
    <div>
      <Grid className="search-result" item>
        <div className="primary-info">
          <h2 className="title">{atividade.objetivos}</h2>
          <Grid container>
            <Grid sm={6} md={3} item>
              <Typography paragraph>
                <strong>Componentes curriculares:</strong>
                <br />
                {' '}
                {atividade.componentesCurriculares}
              </Typography>
            </Grid>
            <Grid sm={6} md={3} item>
              <Typography paragraph>
                <strong>Série:</strong>
                <br />
                {' '}
                {atividade.serie}
              </Typography>
            </Grid>
            <Grid sm={6} md={3} item>
              <Typography paragraph>
                <strong>Duração:</strong>
                <br />
                {' '}
                {atividade.duracao}
              </Typography>
            </Grid>
            <Grid sm={6} md={3} item>
              <Typography paragraph>
                <strong>Conteúdo:</strong>
                <br />
                {' '}
                {atividade.conteudo}
              </Typography>
            </Grid>
          </Grid>
          <Typography style={{ marginBottom: 0 }} paragraph>
            <strong>Assunto:</strong>
            {' '}
            {atividade.assunto}
.
            <br />
            <strong>Recursos didáticos:</strong>
            {' '}
            {atividade.recursosDidaticos}
.
            <br />
          </Typography>
        </div>
        <ExpansionPanel className="details">
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          />
          <ExpansionPanelDetails>
            <div className="details-content">
              <Typography>
                <strong>Atividade:</strong>
                {' '}
                {atividade.atividade}
                <br />
              </Typography>
              <div className="robos">
                <strong>Robôs:</strong>
                {
                      atividade.robos.map((robo) => (
                        <div className="robot-details">
                          {robo.nome}
                          <br />
                          <strong>Peças</strong>
                          <ul className="robot-pieces">
                            {robo.pecas.map((piece) => (
                              <li className="piece">
                                <img alt={`${piece.name} imagem`} className="piece-image" src="https://ae01.alicdn.com/kf/Hdb98aef3662046ffa828b21f49aec733F/1-Piece-Kawaii-Robot-Manual-Pencil-Sharpener-Pencil-Cutting-Study-Tools-For-Kids-Gift-School-Office.jpg_640x640q70.jpg" />
                                <div className="piece-description">
                                  {`${piece.quantidade}x`}
                                  {' '}
                                  {`${piece.nome} `}
                                  <br />
                                  {piece.descricao + piece.imagem}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                  }
              </div>

              <div className="steps">
                <strong>Programação:</strong>
                {
                      atividade.programacao.map((step) => (
                        <div className="step-details">
                          <img alt={`${step.nome} imagem`} className="piece-image" src="https://ae01.alicdn.com/kf/Hdb98aef3662046ffa828b21f49aec733F/1-Piece-Kawaii-Robot-Manual-Pencil-Sharpener-Pencil-Cutting-Study-Tools-For-Kids-Gift-School-Office.jpg_640x640q70.jpg" />
                          <div className="step-name">
                            <strong>Nome do passo: </strong>
                            {step.nome}
                            <br />
                            <strong>Descrição: </strong>
                            {step.descricao}
                          </div>
                        </div>
                      ))
                  }
              </div>

              <Typography>
                <strong>Referência:</strong>
                {' '}
                {atividade.referencia}
              </Typography>
            </div>

          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className="result-footer">
          <div className="result-footer-item views">
            <Visibility className="icon" />
            <div style={{ fontWeight: 500 }} className="quantity">{atividade.views}</div>
          </div>
          <Button onClick={() => like()} className="result-footer-item likes">
            <ThumbUp className="icon" />
            <div className="quantity">{atividade.likes}</div>
          </Button>
          <Button onClick={() => dislike()} className="result-footer-item dislikes">
            <ThumbDown className="icon" />
            <div className="quantity">{atividade.dislikes}</div>
          </Button>
        </div>
      </Grid>
      <Divider />
    </div>
  );
}
