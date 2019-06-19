import { NegotiationController } from "./ui/controller/NegotiationController";
import { QueryHelper } from "./ui/helper/QueryHelper";
import { NegotiationRepositoryImpl } from "./data/repository/NegotiationRepositoryImpl";

const controller = new NegotiationController(new NegotiationRepositoryImpl());

QueryHelper.querySelector(".form").addEventListener("submit", controller.onClickAdd.bind(controller));
QueryHelper.querySelector("#btImport").addEventListener("click", controller.onClickImport.bind(controller));