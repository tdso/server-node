CREATE TABLE `Diario` (
    `id` bigint(20) DEFAULT NULL AUTO_INCREMENT,
    `tarefa` varchar(100) NOT NULL,
    `observacao` varchar(100) DEFAULT NULL,
    `data` datetime,
    PRIMARY KEY (id)
  )  ;