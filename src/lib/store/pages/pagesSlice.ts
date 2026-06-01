import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Page } from './pageType';
import { createPageThunk, deletePageThunk, fetchFastApiPagesThunk, fetchPageBySlugThunk, fetchPagesThunk, updatePageThunk } from './pageThunk';
import homePageData from './homePage.json';
import aboutPageData from './aboutPage.json';
import servicesPageData from './servicesPage.json';
import technologiesPageData from './technologiesPage.json';
import industriesPageData from './industriesPage.json';
import contactPageData from './contactPage.json';


interface PageState {
  allPages: Page[];
  currentPages: Page | null;
  isAllPageFetched: boolean;
  isError: boolean;
  isLoading: boolean;
}

const localPagesData: Page[] = [
  homePageData as Page,
  aboutPageData as Page,
  servicesPageData as Page,
  technologiesPageData as Page,
  industriesPageData as Page,
  contactPageData as Page,
];

const homeLocalPage = localPagesData.find((page: Page) => page.slug === 'home') || null;

const initialState: PageState = {
  allPages: localPagesData,
  currentPages: homeLocalPage,
  isAllPageFetched: true,
  isError: false,
  isLoading: false,
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setAllPages: (state, action: PayloadAction<Page[]>) => {
      state.allPages = action.payload;
      state.isAllPageFetched = true;
      state.isLoading = false;
    },
    setCurrentPages: (state, action: PayloadAction<Page | null>) => {
      state.currentPages = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all pages
      .addCase(fetchPagesThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPagesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allPages = action.payload;
        state.isAllPageFetched = true;
        const data=action.payload.find((page:Page)=>page.slug==="home")
        if(data){
          state.currentPages=data
        }
        
      })
      .addCase(fetchPagesThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      //feetch all, page through fast Api calling
// /api/cms/pages
       .addCase(fetchFastApiPagesThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
       })
       .addCase(fetchFastApiPagesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allPages = action.payload;
        state.isAllPageFetched = true;
        const data=action.payload.find((page:Page)=>page.slug==="home")
        if(data){
          state.currentPages=data
        }
       })
       .addCase(fetchFastApiPagesThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
       }) 
      // Fetch single page
      .addCase(fetchPageBySlugThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPageBySlugThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentPages = action.payload;
      })
      .addCase(fetchPageBySlugThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // Create page
      .addCase(createPageThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createPageThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allPages.push(action.payload);
      })
      .addCase(createPageThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // Update page
      .addCase(updatePageThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updatePageThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.allPages.findIndex(page => page._id === action.payload._id);
        if (index !== -1) {
          state.allPages[index] = action.payload;
        }
        if (state.currentPages?._id === action.payload._id) {
          state.currentPages = action.payload;
        }
      })
      .addCase(updatePageThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // Delete page
      .addCase(deletePageThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deletePageThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allPages = state.allPages.filter(page => page._id !== action.payload);
        if (state.currentPages?._id === action.payload) {
          state.currentPages = null;
        }
      })
      .addCase(deletePageThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { setAllPages, setCurrentPages, setLoading, setError } = pagesSlice.actions;
export default pagesSlice.reducer;
