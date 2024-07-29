import { DetailedHTML } from '@/types';

export interface DeleteButtonProps extends DetailedHTML<HTMLButtonElement> {
  isLoading: boolean;
  disabled?: boolean;
}

export interface PageButtonProps extends DetailedHTML<HTMLButtonElement> {
  active?: boolean;
  disabled?: boolean;
}
