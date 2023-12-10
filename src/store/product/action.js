import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService, httpService2 } from "../../utils/service";
import { GET_ALL_PRODUCT, GET_PRODUCT_DETAIL, GET_PRODUCT_FASILITAS, GET_PRODUCT_MATERI } from "../../utils/constant";

export const getAllProduct = createAsyncThunk(
  GET_ALL_PRODUCT,
  async () => {
    try {
      const response = await httpService.get("/product");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const getProductDetail = createAsyncThunk(
    GET_PRODUCT_DETAIL,
    async (productId) => {
      try {
        const response = await httpService.get(`/product/${productId}`);
        return response.data;
      } catch (error) {
        return error;
      }
    }
  );
  
export const getProductMateri = createAsyncThunk(
    GET_PRODUCT_MATERI,
    async (productId) => {
      try {
        const response = await httpService2.get(`/product/${productId}`);
        return response.data;
      } catch (error) {
        return error;
      }
    }
  );

export const getProductFasilitas = createAsyncThunk(
    GET_PRODUCT_FASILITAS,
    async (productId) => {
      try {
        const response = await httpService2.get(`/product/${productId}`);
        return response.data;
      } catch (error) {
        return error;
      }
    }
  );