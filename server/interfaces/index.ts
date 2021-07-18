import { Request } from "express";
import { Sequelize } from "sequelize";

export interface IExtendedRequest extends Request {
  diContext: IDiContext;
}

export interface IDiContext {
  dbClient: Sequelize;
}

export interface ICompany {
  id: string;
  company: string;
  emailFormat: string;
  createdAt: string;
  updatedAt: string;
}
