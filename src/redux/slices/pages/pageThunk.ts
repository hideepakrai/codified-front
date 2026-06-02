import { createAsyncThunk } from '@reduxjs/toolkit';
import { Page } from './pageType';

const tenantHeader = process.env.NEXT_PUBLIC_TENANT_ID;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Fetch all pages
export const fetchPagesThunk = createAsyncThunk(
  'pages/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/pages`, {
        headers: {
          "x-tenant-db": tenantHeader || "",
        },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch pages');
      }
      const data = await response.json();
      return data.pages;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchFastApiPagesThunk = createAsyncThunk(
  'pages/fetchFastApiAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/cms/pages',
      {
        method:"GET",
        headers: {
          'Content-Type': 'application/json',
          "x-tenant-db": tenantHeader || "kp_codified_web_solution"
        },
       
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch pages');
      }
      const data= await response.json();
      console.log("all pages fetched ", data)
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch a single page by slug
export const fetchPageBySlugThunk = createAsyncThunk(
  'pages/fetchBySlug',
  async (slug: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/pages?slug=${slug}`, {
        headers: {
          "x-tenant-db": tenantHeader || "",
        },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch page');
      }
      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Create a new page
export const createPageThunk = createAsyncThunk(
  'pages/create',
  async (pageData: Page, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/pages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "x-tenant-db": tenantHeader || "",
        },
        credentials: "include",
        body: JSON.stringify(pageData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create page');
      }
      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Update an existing page
export const updatePageThunk = createAsyncThunk(
  'pages/update',
  async ({ id, pageData }: { id: string; pageData: Partial<Page> }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/cms/pages/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "x-tenant-db": tenantHeader || "kp_codified_web_solution",
        },
        credentials: "include",


        body: JSON.stringify(pageData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update page');
      }
      const data = await response.json();
      console.log("page updated ", data)
      return { _id: id, ...pageData } as Page; 
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Save current page content to API
export const savePageContentThunk = createAsyncThunk(
  'pages/saveContent',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as any;
      const page = state.pages.currentPages as Page;
      if (!page) return rejectWithValue('No current page');
      const id = (page as any).id || (page as any)._id;
      const response = await fetch(`${API_BASE_URL}/pages/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "x-tenant-db": tenantHeader || "",
        },
        credentials: "include",
        body: JSON.stringify(page),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save page');
      }
      return page;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete a page
export const deletePageThunk = createAsyncThunk(
  'pages/delete',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/pages/${id}`, {
        method: 'DELETE',
        headers: {
          "x-tenant-db": tenantHeader || "",
        },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete page');
      }
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

