use ESUSSAMU
SELECT
    Obito,
    QuantidadeObito
FROM
    (
        SELECT
            'POR ACIDENTE DE TRANSITO' AS Obito,
            COUNT(*) AS QuantidadeObito
        FROM 
            HISTORICO_DECISAO_GESTORA
        INNER JOIN 
            Ocorrencia ON HISTORICO_DECISAO_GESTORA.OCORRENCIAID = Ocorrencia.OcorrenciaID
        INNER JOIN 
            Intercorrencias ON HISTORICO_DECISAO_GESTORA.INTERCORRENCIAID = Intercorrencias.IntercorrenciaID
        INNER JOIN 
            Motivo ON Ocorrencia.MotivoID = Motivo.MotivoID
        INNER JOIN 
            Tipo ON Motivo.TipoID = Tipo.TipoID
        WHERE
            Intercorrencias.IntercorrenciaID IN (18, 16, 19)
            AND Motivo.MotivoDS IN (
                'ACIDENTE ONIBUS (TRANSPORTE COLETIVO)',
                'ATROPELAMENTO POR BICICLETA',
                'ATROPELAMENTO POR CAMINHÃO',
                'ATROPELAMENTO POR CARRO',
                'ATROPELAMENTO POR MOTO',
                'ATROPELAMENTO POR ÔNIBUS',
                'ATROPELAMENTO POR TREM',
                'CAPOTAGEM DE VEÍCULO',
                'CAPOTAMENTOCOLISÃO',
                'COLISÃO ANIMAL X BICICLETA',
                'COLISÃO ANIMAL X CARRO',
                'COLISÃO ANIMAL X MOTO',
                'COLISÃO CARRO X BICICLETA',
                'COLISÃO CARRO X CAMINHÃO',
                'COLISÃO CARRO X CARRO',
                'COLISÃO CARRO X MOTO',
                'COLISÃO CARRO X MURO/POSTE',
                'COLISÃO CARRO X ÔNIBUS',
                'COLISÃO CARRO X TREM',
                'COLISÃO MOTO X CAMINHÃO',
                'COLISÃO MOTO X MOTO',
                'QUEDA DE MOTO'
            )
    ) AS Subconsulta1

UNION ALL

SELECT
    Obito,
    QuantidadeObito
FROM
    (
        SELECT
            'POR CAUSA CLINICA ' AS Obito,
            COUNT(*) AS QuantidadeObito
        FROM 
            HISTORICO_DECISAO_GESTORA
        INNER JOIN 
            Ocorrencia ON HISTORICO_DECISAO_GESTORA.OCORRENCIAID = Ocorrencia.OcorrenciaID
        INNER JOIN 
            Intercorrencias ON HISTORICO_DECISAO_GESTORA.INTERCORRENCIAID = Intercorrencias.IntercorrenciaID
        INNER JOIN 
            Motivo ON Ocorrencia.MotivoID = Motivo.MotivoID
        INNER JOIN 
            Tipo ON Motivo.TipoID = Tipo.TipoID
        WHERE
            Intercorrencias.IntercorrenciaID IN (18, 16, 19)
            AND Tipo.TipoDS IN (
                'CLINICO'
            )
    ) AS Subconsulta2

UNION ALL

SELECT
    Obito,
    QuantidadeObito
FROM
    (
        SELECT
            'POR OUTRAS CAUSAS EXTERNAS' AS Obito,
            COUNT(*) AS QuantidadeObito
        FROM 
            HISTORICO_DECISAO_GESTORA
        INNER JOIN 
            Ocorrencia ON HISTORICO_DECISAO_GESTORA.OCORRENCIAID = Ocorrencia.OcorrenciaID
        INNER JOIN 
            Intercorrencias ON HISTORICO_DECISAO_GESTORA.INTERCORRENCIAID = Intercorrencias.IntercorrenciaID
        INNER JOIN 
            Motivo ON Ocorrencia.MotivoID = Motivo.MotivoID
        INNER JOIN 
            Tipo ON Motivo.TipoID = Tipo.TipoID
        WHERE
            Intercorrencias.IntercorrenciaID IN (18, 16, 19)
            AND Motivo.MotivoDS NOT IN (
                'ACIDENTE ONIBUS (TRANSPORTE COLETIVO)',
                'ATROPELAMENTO POR BICICLETA',
                'ATROPELAMENTO POR CAMINHÃO',
                'ATROPELAMENTO POR CARRO',
                'ATROPELAMENTO POR MOTO',
                'ATROPELAMENTO POR ÔNIBUS',
                'ATROPELAMENTO POR TREM',
                'CAPOTAGEM DE VEÍCULO',
                'CAPOTAMENTOCOLISÃO',
                'COLISÃO ANIMAL X BICICLETA',
                'COLISÃO ANIMAL X CARRO',
                'COLISÃO ANIMAL X MOTO',
                'COLISÃO CARRO X BICICLETA',
                'COLISÃO CARRO X CAMINHÃO',
                'COLISÃO CARRO X CARRO',
                'COLISÃO CARRO X MOTO',
                'COLISÃO CARRO X MURO/POSTE',
                'COLISÃO CARRO X ÔNIBUS',
                'COLISÃO CARRO X TREM',
                'COLISÃO MOTO X CAMINHÃO',
                'COLISÃO MOTO X MOTO',
                'QUEDA DE MOTO'
            )
            AND Tipo.TipoDS IN (
                'CLINICO'
            )
    ) AS Subconsulta3;
