
import React, { useState } from 'react';
import { PROVEEDORES, TECNOLOGIAS, TRAMITES, DOCUMENTOS } from './data/mockData';
import { Proveedor, Tecnologia, Tramite, Documento } from './types';
import Dashboard from './components/Dashboard';
import ProviderList from './components/ProviderList';
import ProviderDetail from './components/ProviderDetail';
import TecnologiaList from './components/TecnologiaList';
import DocumentoList from './components/DocumentoList';
import Reports from './components/Reports';
import { HomeIcon, BuildingOfficeIcon, WrenchScrewdriverIcon, DocumentIcon, ChartBarIcon } from './components/Icons';
import Notification from './components/Notification';

type View = 'dashboard' | 'proveedores' | 'proveedor-detail' | 'tecnologias' | 'documentos' | 'reportes';

const logoSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAA2CAYAAADuGobNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA5wSURBVHhe7Z1/aBxlHcd/b2/d1m3pblu2tFv/pS3qgm1lW1C02pYVFLGgCqW02IqFFaOCgmjERAsKRYtYjVhorSg+oWkl1iK0/VAEFYvS/gFajVTQ3lJStLXd1m3pdve+eXfzk5lkdpM7J5k75+b9fODhZCfzZuZ9n/lkd3dn94EIIYQQQgghhBBCCH0fDkEhhBBCCCGEEEIIoR+HIIUQQgghhBBCCCGEfhxCEoUQQgghhBBCCCF04xDWdODAgcOHD5+8ePGWlpa9wWv27t37wQcffGvNmjV79uyp1q5du3379r17927dunW3t7fPzMxYs2bN559/vmrVqkWLFj148OC2tjZr1qzZs2fPO++8o9176NChTz75ZM2aNbt3716yZMmePXu++uqrtWvX/uijj1atWnVgYGCtWrXWr1+/adOmmZmZW7ZsOX/+vF2fPn36559/7tu377ffflvT7fbt22+//XZqf9KkSX/++ee7d+/+4osvVqxYMXXq1J///Of79+/b95gxY2bNmjV06NA5c+Zs3LjxwoUL9vT0/Pjjj48ePdpud+/e/d133/3ggw9+//33J06c2Lt374YNG/r6+pYsWbJhwwb7r1u3bt26dYcPH75t27aZM2euXLny9ddfb9++fe7cuS1btmzevLldx44d+/77748cOfLxxx9v3779smXLtmzZsmfPnnfffbdtO2vWrG3btu3evXvPnj1nz55dtWpV+x/71KlTjz/+uKeffrpp06b333+/adOm3bt3v/TSS5cuXfrpp5/27du3cuXK9evX79+/v6+vb/fu3WvXrh09evT06dPb29vb/ZAhQ+bNmxcyZEj77169evXhw4e///77OXPmNDQ0/Pjjj7du3aq9+/bte/DgwcGDBwcHB587d+6ZZ57p2LEj+4+ODhw4cODAgaWlZXj0iy+++OLFi9etW3d4eHhqaqq1tTXg9+vXr7e1tbW1tQU2fPPNN9bW1gYGBjZt2hR4HxgYGBgYOHXqVFtbmw3w8ccfnz59Wh/o559/vnz58uTk5E8//RQY8scff9y4caN+v2HDhtzc3MaNG5cvX56UlBT4HzFiRH9//+bm5v3793/66af+/v6JEyfat2/fsmXLtm3btm/fvuLi4pUrVy5cuFBcXFy3bt3WrVvXrl27Zs2aNWvW3L59+8qVKxcvXvzi4sXFixcvX758/fp1W7Zs2b59O5vNmzfv379f6+nTpy9evNjW1tZ29+7dO3fubG9vb2vr7u7e3t7W2t7e3t7W2t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t7e1t-577LwFzF/0rB2eGzI480F9g7fI48/d13sC/4XFjP9v1kR/5Fv+D3lF6+y+T482t7d+55z3d87yX5p4QQgghhBBCCCGE/jOEIJVWz5w5M3ny5NatW3dt27Z94403+vbtu3PnzgULFjzw9ddf//DDDz/77LNNmzY9+eSTx44de+ONN3777bc3bdr02muvvfbaaxUVFdHR0bfeemvbtm0XLlwof39/ly9fvnHjxqtXr27duvXSpUvt7e0//fRTnJyc8+fPnz9/fmlp6b333nv58uXjx4+/++67d+/efeaZZ44dO3bq1Knf/va3GzZs+Pzzz3fv3t3S0rJmzZoTJ04cOXLk9OnTb968ee7cuWeeeebzzz/ftm3brVu3bt269dJLL/X19V28ePG5557Lz88vKCh48cUX//nPfzZu3Pjcc89ddOnSpdOnTx88eDBjxgx5wP72228PHjz4008/7du3r6Sk5MSJE5cuXbrppZd+//3327dvHz58eGNjY8OGDa+//npNTc2oUaNWrFiRkpKyZ8+ejRs3fvHFF19++eV777134cKFzZs3nzRp0pw5c1566aW2trbt27evXbv20KFD+/fv3759+9ixY9OmTZs3b96+ffsPP/ywZ8+ed999d9euXYcOHcrLy+vr63v88ce7urruv/9+06ZN//jHP3755Zfbt2/fs2fPt99+++OPPz59+vTbb7/ds2fPF1544Ysvvnj48OFXX3119OjRu+++26ZtU1PToEGDnnzyyQkTJmzevPnpp5+urKxcuHCx/b/6y7/8yy+//PLeoUOHbt26ffnll0eOHLlx48Z33333m2++OXXq1J///Of79+/v6+s7cODAhAkTvvrqqy+++OILL7zQvmfTpk3vvvvuO++88+abb7Zs2XL48OGrV68eO3as/bcMDAy++OIL7dq1+/bbb2/dutW+p7e3t7e3d+jQoQULFqxYsaK9vX3Pnj2bm5vbd5v7/fff/8UXX6xZsyYxMXHv3r179+7ZsWPHqVOnBgYGpqamNm3aNGLEiEaNGs2bN29o6OrVq7V1+PDhgwYNuueee4YOHfrzn/+cnJz81ltvffrpp4cOHTpx4sTatWuPHj3a3t5es+vWrVu3bt26devW7cGDBytWrLh27dqxY8f279+/bt26ycnJ0dHRNpu/v3/fvn3bt2+36Zs1a7a0tHTy5Mk333yzv6/Pnj07OTk5Ojr+6quvDh06dPv27e3t7dHR0cHBwcnJycnJycnJyejo6NjY2NjY2JgxY0aOHDljxoxp06ZNmzZt2rRp3759+/fv37x5c/fu3enTpycmJtbW1t67d++uXbsaGho2bdr07rvvNjc337dvX0VFxfbt27dv3759+/YbNmwwMzPv3r1b/6FChQo///xz+w0aNDAyMtiwf/XVVzNnzrxjxw7tGxoaqj8jRoyo+f79+9/4xjcGBgaampoOHDhw5MiRu+6668QTT/z0008HDhwof39/UFCQdHR03/rWt06fPl1bW/vpp5/WWdDQQK2///zz73//e6V+d/PNN7/85S9///vfrf++7LLLng9e5W9+85sf/ehHv/3tb4ODg3v27NmyZcvhw4dbWloWLFigfevWrfvRj340ODi4paUl/f39tbW1NTU1g8KDBg2y0P7666/f9773bdu2bfjw4Z/+9KcnTpyo627evPnmm2+22N/+9rdbtmzZt2/fsmXLtm3bvvTSS6tXrw4L+/r63n777V/+8pdz587t37//9u3bN2zYsGHDBrtnzZo1bdu2bdy48eDBg5ubmx9++OHhw4dbt27ds2fPrVu3trS0PPHEE1/72tcOHjyo5s2aNWvixIn6B+hvoF5fX+/T+d7e3nfeeefQoUOFFRQU3H///XfeeeeBBx4YPHjwO++8s3bt2o4dOxYsWPCDH/xg+/btU6ZM+dKXvvTPf/6zpaXl0KFD69ate/DggbavX7/+5ZdfXr58eUxMTH9//8OHD9+5c+eDDz4oX9/e1t7ezs4OtbW1tZXs7P9fK3t7e1tbW7299wU8OzvL2dm5qqoaFBQUExOzdevWVlZWtra2n3/+2V26p0+fPnny5EWLFiUlJT/4wQ8+97nPPfroo2fPnj1w4MCFCxf+/Oc/nzhx4q+//trT0/Ozn/1s0aJF69at+9Of/jQ6OvratWu//vWvr169etOmTdu3b1+9enX/D68//fSTfW8L/sUXX5w9e/acOXM+/PDDOXPm5Ofn//Wvfz1+/HhPT88XX3zxwQcfnD59+pdffnnx4sXyJg4f/lX9kSNHFhYWHnzwwTNnznzwwQefeeddHTt2HDhwwG5fR30f9tWvfvWJJ574zne+s2HDhj/+8Y+//e1vFyxYMHny5CeffNL/1Xhvb+/27ds//PDDFy9evHTp0tGjR+/bt++b3/zm0qVL//SnPz148ODWrVv/+c9/fvvtt59++umWLVvu27evpaXllVde+eabb4YOHfriiy/OnDlT/3nzzTfv2LFjzZo14eHh3/jGNwYOHDh48OC9e/e0b968+fXXX+/atcv6+/Pnz7/88stly5ZdsGCB/i/+x3/8j2+//Xbsb+edd/7u7/6u/iM/8iP16rbt3Llz8+bN//zP//zRRx+9++673/ve9954443Tp0//4Q9/+Oyzz/bv3/+uu+7avXt33759+/fv/9RTT40YMeLatWtfffXVU089tWzZsr/85S+bNm0aM2bMrFmzFi1ahP8jI0eO9OvXr1ev3oULFwoKCl599dWTJ0/+/PPP9+/fv2vXroEDB964cePGjRv7+voePHhwzZo1u3fvfvzxx5cuXfrpp5++8cYbv/nNb37ve9/73e9+p729fejQob/+9a+fPn36559/3r17t6ysbMqUKatWraq/zZo1azdu3Pz617/evHnziBEjNm/e3G6fPn2uXLny+9//ftOmTSu+9a1v/ctf/lKzdu3a+uijjzZv3hwelPb29g9+8INbt24tLS0dN25cQ0ND+wb0j+kfZs6ceeCBBx544IHm7dq1e8/a9vYOO2jAgAHfffed9h/z0Ucf/epXv7px48aRI0fu2bPn4MGDRURE3H///T/72c/6+/svXLhQ0+nTp8+ZM2fp0qULFiyora3917/+1dPTc/z48du3b//0008HDhwo+2vXrr127dra2trm5ubNmzcPDAzcunWrxowZM+bzzz/fvn3773//+5gxY370ox/95je/+fTTTx89evSoUaM++eSTW7ZsOXjw4PDhwwsLC2+//faePXu++eabWq9fT2fbtm0bOnTounXr9u3bN3bs2LPPPtu+x9KzZ8/HH3/csGHDCy+88Mknn7zzzju//vWvf/vb39asWXPkyJH+/v5vv/322rVrjz/+eH1D+/Tp0+u///3v2bNn77//vjVr1nz//fejo6N/+MMf9u7d22bbtWvXr371qx999NHt27e/8MILH//4x7ds2TJ58uR//ud/vvHGG+/evftXv/rVo48+euLEiR/96EcbNmxYs2ZNYmJiU1NTk5OTPT09+/btu3Tp0uTk5H//93+/fft2RUXF1KlTBw4caK+mY8eOXbt2bdiwYf/+7//+k08+6e/vb9euXQcPHtyyZcsHH3xQU1PT0tKyYcOG8PDwgQMHbt269bXXXtu2bdszZ878yEc+8uCDD+7atav+5vbt21euXFlWVhYZGRn/006ZMmXatGm/+c1vBgYGbty4cd26dRs2bFi/fv3ly5fbt2/fv3//zp07x44d+/HHHx8/fvx3v/vdd955p7m5ef/+/W3b7r///s7Ozk2bNm3dutV/X7JkyeDBg/fs2ZOVlVVdXd2gQYMmTJhgr/N//+//3bdv34kTJ6qqqq5aterjjz/etWuX1kOHDr3qqqsWL178j//4j40bN+7ateuDDz44adKkf/zjH5cuXTr+f+p//8//efz48d69e48cOfKWW25p3zNjxgxdQ4cOffrppzds2LBy5cp+/frNnDnzoQ99aPny5Xfeeae5f//+devW7d27d8OGDStWrDh48GBgYGDHjh0bNmzYsWPHlStXTpw40eYtW7YsWbJE/8HBwWvXrt27d2/16tXffvvtW2+9NW/evHnz5j3wwAPfffddjRs33rhxo7p9+vT54IMPGhoaNmzYsGHDBuvWrVu3bl1fX/8DH/hAc3PzX/7yF5ubm48ePdp+zJgxw37s8fX1feGFFx5//PF2HThw4MEHH9zS0nL06NFlZWX9/f0nTJjwn//5nz/84Q+jo6NPnjy5devWW2+99bXXXrvvvvvk5ORffvnlvXv3/uUvfwl79/X1feTRR7dq1WrhwoVPPPHEhAkThg4devz48Z/+9KcNHTp06NChp59+es2aNd/+9re/8IUvfOlLX/rRj360d+/e//qv//r222/Pmzfv6aef7tmz5z//8z8nJyefOHFixIgRt9122yabbNKuXbt/+qd/etOmTWvXru3vb127du3cuXPYy/b29l999dWkSZOys7O7uroiI62rq7vtttvuvPPOf/nLX7Rs2TJgwIDQ0NC5c+caGhr6+/ur3xdfXl5+xx13XLFiRUVFRXBw8Mknn/ziF7/o6+t74IEH6j+m//73v//f//3f4eHht91223PPPXfgwAHtP7ytrW3hwoW/++477Vv75S9/ef369TvvvNM+u2nTpjvuuOOEE06w902bNu3qq69evHjx7bff7tmz53nnndc+RERELFnS/853vvOQQw7ZvHmz/gMGDBg9evQrr7yyYsWKj3/849/85jffddddJ06cuH79+vjx4wULFty1a1dLSwt72uTk5KFDh0aOHPlv//Zv8fHxM2bM+PGPf3zmzJnHjx/v7+/ftWtXx44d+/bte/Xq1fbt21999dVbt26tq5977rnvete7Tp48Wd+///3v7d69+8knn5w+ffqjjz76xBNP/Ot//S/r+/3vf/+uXbtWrFjx/vvv62+zZs36wx/+sH336tVrzZo1n3nmGV1Dhw6NGTPmpZde2r9/v/2HDx/+hS98oU3blpaWvXv3btOmzbZt26ZNm77yyiuHDx8eFBQ0MDDw1ltvndD/xRdfvH//vn2zfv36ycnJo0eP/uu//su333575MiRiYmJP/nJT37uc585evTod77zndGjR//85z+/fv369evX33fffWlpaX1/+PDh//u//2v/48eP33///U2bNo0YMSI/P/+5554bOXKkvr9r164XX3xx+/bt7777bs2aNUePHtW/nZubO3To0DvvvNMe4OfnZ5/ZtGnTd77zndNPP72lpWWPzzfffPP27dsHDhwYHx//qle9avLkyc2bNx8/fvzaa6/99re/vaen54UXXjhw4MCePXt+/vOfP/XUU997770vv/yyZcuW2tpalpaW+vr6uXPndu/e/bvf/e4999xTU1Nj//79a9eu3bp1q32vtbV106ZNTzzzTPN27tz5n//5n0mTJv3+979funRphx3k5+cnJCRcd911e/furX7f19d33HHH/eUvfxk4cKDWbdiw4Re/+EWrVq2WL19etmTJ7du3v/vuu40bN+7Zsyf94N6xY8czzzyzbdu25cuX2zR9+/bduXNnTEzM22+/ffHixe3bt+/fv3/NmjX79u17+umnOzo6NmzY8MEHH/zw4cMff/zx9evX9+/fX1VVNWTIkBEjRqxa9f6v/n/GjBk//OEP9uzZc+bMmevXrh07duzatWvbt29/9NFHjz766Msvv3zrrbc++eSTBQsW/PSnP23fvf/aa6+1b9u2bbt+/fpbb721adMm7UuXLl21atXSpUsnJSWlpaXl5uY2NjZ+6aWXHnjiibfffrtd4uLiZs2affrpp0VFRVFRUcOHD5+QkDA4OHj8+PH+/v7x8fGVlZVnz569evWq9tOmTbvllluysrLOnj07MzPz9OnT+/btu3Xr1osvvrhly5bVq1fPnz//xIkTZ82a1dPTs2zZsjvvvHPTpk2tra0DBgzwj9l//dd/7du3r6Sk5Pjx44MGDTrrrLP+4i/+QpvmzZt3+umnz5gxY8SIEQcOHPD/8s4776xZs+bGjRu1tf/b//5/33rrLT2H/yPffvvtxx9/3N/f39nZ2d3dXb+zcePGPXv2bN682V6hX3/9dXl5+c0336y1uLi4devW//3f/+3X/4FfLpcuXbr+/v76/759+9avX79v3z5t+fzzz/fs2XPYsGFPPfVUXV1de3v72bNn+/v7V61aNW3atL17965du7Z169Zjx47t37//9evXW7duLVmyZMGCBe+9995FF120bt06fQP6BvSNd955R/vmzp1bsGDBiBEj7rzzzl/+8pf33nvvsmXLJkyY8Itf/GLeX/zFX+zfv3/nzp3PP/98y5Yt3/72t7/11lv/+I//+He/+92ECRP27NnzgQ98wLwVK1Zs1qxZw/uSJUu++OKLBx54YGRk5K233lq/fn1FRUX7j/P5+fnnnntu6dKl2rb169dv2rTpoosuuvrqq3v27NmzZ8+CBQu2bt26du3a9OnTW1paXnjhheu/9+e/8OyzH4d/880Pfvq739m0aVNGxmeffea555677roraWlZ+fn5jRo1ys8v+fLLtWvX+vTp8+GHH06cOHH48OG1a9cWFRVdsGCBviF+Q/369TsxMTE/P7+lpaWxsbGhoWHr1q0rVqwoKChYsWLFqVOnNmzYUFNTe//+/d///vdFRUVPP/10//79z549a+8XLlzYv3//j370ox9++OHt27dXrVp10003bdiw4cKFC2+55ZZ77rnnd77zndGjR69atWrdunWvv/766dOnb7jhhpUrV377299esWLFhAkTZsyYMXPmzO+++277V+j72GOP/elPfyosLCwsqr9rY8eOfeCBBz777LN27dr94Q9/uOmmm+65557Jkyf/9Kc/3blz50033VRbW7v22ms3atSowYMHFy1atHbt2qampq1bt27btu27776bMGGC9h0+fPjlL3/5n//5n9mzZz///PMjIyN/8YtfHDt2rP233XbbeXl5//qv/9qzZ8/69ev36tXr1ltv7evru2bNmtTUVE1NTWNj46hRozZv3hy+45577nnooYdGjBgxaNCgG2+88dNPPz169Oj333/fvXt3f3+/Xv2cOXPuuOOO3bt3r66ubtSoUY0bN27fvn1bW9s+ffq8/vrrN9988w9+8IMHH3xw+fLly5Yt2759e0xMzFvf+tZ77rmn9g8ePHj48GH9A/QdI8eOHTt+/Pjt27ffc889a9eu3bhxo/1GjBihf+9/f/fdd5cuXfrpp5/27dt39OjR27dvX7p0qV1v3bp13LhxEydOnDBhgr/Lz8/P/6c+Pj4+JiYmPj4+MjIyJCTkH34SHR0dHh7uHwsICAgKCvLz8+fn55eXl5eXl6enZ2dnZ01NzcjISFhYmJOTk5eXV1hYWFFRERsbm5iYOH/+fGlp6bJly/r6+oKB/R/F6NGj9+zZc+bMme+//75WExMThw4duvfeexvX/B/i+eef37JlS1NTU0dHx9WrVzdv3rzV8Ntvv615x44d33vvvTvvvNP+/e233z569OjFixf///+//9o33377k5/8ZP78+WvXrsm/9P3hH6Jd9j+UeJcuXao9QnL8+PHx8fG//OUvb7jhhsrKysbGxosWLTr33HNtO1VfX/+JJ55wfn/sN/bxxx/37dvX0tLyzDPPXHLJJTs6Os6ePVtbW7t27drdu3cPHTq0evXq99xzT3Jy8uTk5CeffHLNmjU33XST9g/tqVOnDh061NbWtmDBgpUrV3bv3r1o0aK6urpRUR9//PHQ0NAxY8Zs3749+6f+j7Bv375Xr149ffp0e4+Njf3ABz7gx/F8w3feeSds/p133mlVz/vvvx9Wf6R/8cUX/+1vf+vve8GChe0//68dOXLkyJEjY8aMmTFjxn/2Z3/24x//+Oabb9atWzf/P+6/996eM+x/qG+//fYn/vN//sSbb/7hT3+6c+fOf/vb/08P8L8QJkyYsGHDBq1D6Pvw0EMPtW3Nnj3b/j/b9u2jRowY8fTTT2v517/+/eLFi2/duhV2P6T16P6HHnqo//e/a665ZuPGjffccw9b9N///d+tW7d+/fr17373Oz3b//0PP/ywfU/r1q3z/99/d9x3X331Vf8j+rPPPnvxxRdjB9988019A1o7ceKExj+0P6Qx83/e19c3ODi4paXFz1lCCCF+3rJly4oVK/b/G1+5cuX27dt9+/YN/D+EEELox7t06fLzn/988uTJDz/8cNeuXY2NjUFBQWPGjNmzZ0/brly58quvvhoyZMiCBQuysrLOnj27ZcuWzz///FNPPTVo0KCaNWv+4he/WL9+fVlZWXh4+NSpU2fOnNm1a1dfX9+uXbt27dr11ltv7dq1q6ur++abb37wgx80vL9+/f4jH/nIwQcPbtq06X/+539uueWWixYt+uCDD37+85+///3vr1u37uzZs7///e9/5plnnnjiiZtvvvmNN9544oknvva1rw0MDExNTV155ZV33nnnq6++2rlz59KlS5cvX15SUvLnP/954MCB2dn+v/pP/zM2NrZ58+Zbbrll27ZtlyxZsmnTpu3bt3/xxRcbN2586aWX7rnnHvtXz/b+yU9+8uCDD+7atav+ZvPmzbNnz37xxRdbWlrWrVv3xje+8Yknnujv32nTpp/+9Kdf+MIXvva1ryUnJ2dkZPzhD3945ZVX/vu//+sPfvCDgYGBf/zHf/zP//zPSy+9NHLkSBs6c+ZMY2Pjn/70py+//HJGRkbz39/+5V/+Rfvmzp0r+P/8z/9s06ZNVVVVRkZG9r+f6b940aJFn//85+np6StWrNj+c6TOnz9/yZIlH/nIR+bPn/+rX/3q0ksvffPNN5ctWzZo0KCHH374hRdeuGLFin379l155ZXz588/ffp09Q0dOrRnzz8e+9vf3jds2JBR+fDDD//lX/7l+vXrt99++/PPP9+m+gG9H9I2Njaef/5+O3v27FkLfvjD3n/yyad+4zd+Q9v+q1/5rL7/+s+///xW/78xNXXF5MmT161b97WvfU0feX/lKV1/+rOfHT9+vP2Hjx/b2tq+/vWv33HHHT///PMf+MAHZs6cOTg4aNOmTZs2bevUqXPDhg0TJ0782c9+1v7nzZvn31u3btW+YcOGVVVV/e1vf7vr939/zpw548ePHzdu3Ozs7MLCwiVLlnz66addXZ2DBw/ub3x8/NSpU4cOHVq2bJkWQwj9ZAYPHtzo/r333ltzT548adOmTZ8+fW+++Wa7/93v/h5b8MADD/wZ2kIIfd59+/bdv39/+vRp/wX2v1/72te+733vO3PmTDv76NGj//mf/9mvbzf+8pe/nDx5cv78+S+//PK1117bsWNH6/7uu+/27Nnzr//6r9W/yZMnX7Ro0bx589577732d+/e/fr165988kmL3n777T/5yU9u3bp1/fp1f3/D+9dff33s2LHFxcX9/f2rq6vr6ury8vKTJ09eunSptbX16aef7tmzJ+wF+w9Z/8gjj/zzP//zF7/4xd/85jcXL178z//8z8KFCzdu3Pjx48cXLlx45MiR++67r33Tpk1b/8CBA+fOnfvABz7w3e9+N3bsWFsWExPTsmXLL7/8smbNmhdffNH+F/6/d+XKlZ/+9KcNHTpU91tvvTUmJubJJ5+8devWiRMndu3ate/evdOmTfv000+rK/z5z3/etm3b/Pnz77//vsaPGDHipZde6uvr+9vf/rbv7X709ttvf/WrX23/s3HjxoYNGz711FNVtbfeeuvQoUO3bt06cuTIsWPHNmvW7L333mvf7t+/v6ioqKmp6dSpU/v377927Vr777LLLluyZMn8+fPrv127dr//+79Pnz5969at29u/ffs2a86fP3/q1Km27dSpU3feeefNN9/csWPHk08+2d/f/+mnn15//fUDBw7cu3fv/PnzV69evWDBAr1+vK+vf++99+rr3b179/333/+73/1u7ty5b7zxxmte+87/6t9/1//1/v//+9///T///LOf/WxYWNjHH39sP7Nnz54yZcqqVau+853vXHTRRaNGjf785z8/8cQTTz311D//+c99+/ZNnTpV26VLl37u7/7O9ddfv3///gMHDmzYsOHFF18s+Pbt27dt23bq1KnWbdu2rX3PjTfeyP95+/bt+/fvr62tnTZt2sCBA1999dUHHnjgN7/5zSOPPPLII4/s37+/pqbm3nvv/de//vXatWt/8YtfvPnmm+fPn9+9e/euXbseeuihQ4cOLV26tGHDBq1DCP2cBAQEvP/++1qvv6E7e/bsmzdvfv755wcHB1955ZWDBw/W/DXXXFO1u3bt+uabb9q2+fPn33LLLdu2bTt58qRWW7du/d3vfneL5s+f/+tf/1pzzjvv/Pvf//6NN95YtWpVN3gIIYQQQggh9D/y8ccf93V91+xLL720dOnStLQ//vjjq1ev/o3f+I01a9acMWPGX/3VX+Xl5a+//vqCBQu+/vWvN2zYsGLFivfee++VV15Zvnx5jQv4f//3f7V+R0fHzz777Hvf+968efP+8R//cXBwsH3PnTu3adOmixcvLigo+PWvf/0tb3nf4sWLX/ziF7NmzZo6dWp4ePjjH//4wQcf/N73vvfxxx//z//8T+vWrfv5z38+e/bsJ554YtmyZSs+97nPjRw58me/+92XX3550aJFlpaWtpaPHz+m3y8f/+7v/m7nzp1PPvnkwIED/eD67W9/+4UXXqjZ165du3Tp0j/90z8dPHiwpr5z586jR49q/JkzZ15//fU1ax999NHFixfv3r1b44cPH/7+97+/ffv2lStXzp07d+7cucWLF3/22Wdt21tvvXXXrl0HDx6cN2/e2LFj3/zmN6+//nrbtm1///vfd2yL3x8IIYQQQgghhBBCH0ahI0ohhBBCCCGEEEII/ThEKYUQQgghhBBCCCGEfhzCPxBCCOHlTZky5dJLL73zzjslJSVvvvnmLVu2fPrpp0uXLm3duvWSSy5Zvnz5mTNndu/enZ+fP2rUqLvvvvvRRx/Nzs5+8sknzzzzTFNTE5xCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCFEKYQQQgghhBBCCCGk4xDKRRBCCCGEEEIIIYTw7yFEUggggBBCCCGEEEIIfR+E2SkhhBBCCCGEEEII/ThEKYUQQgghhBBCCCGEfhyCFAohhBBCCCGEEEII0T+EtQ0hhBBCCCGEEEIIof8j4A/9f/n/kY1yIYQQQgghhBBCCKHfwCEoQgghhBBCCCGEEEI/DoEohBBCCCGEEEIIIYT4/hF0pQghhBBCCCGEEEII/Tj+B/gKz+cM1IOWAAAAAElFTkSuQmCC';

const App: React.FC = () => {
  const [proveedores, setProveedores] = useState<Proveedor[]>(PROVEEDORES);
  const [tecnologias, setTecnologias] = useState<Tecnologia[]>(TECNOLOGIAS);
  const [tramites, setTramites] = useState<Tramite[]>(TRAMITES);
  const [documentos, setDocumentos] = useState<Documento[]>(DOCUMENTOS);
  const [view, setView] = useState<View>('dashboard');
  const [selectedProviderId, setSelectedProviderId] = useState<number | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
  };

  const handleAddProvider = (provider: Omit<Proveedor, 'id'>) => {
    const newProvider: Proveedor = {
      ...provider,
      id: Math.max(...proveedores.map(p => p.id), 0) + 1,
    };
    setProveedores(prev => [...prev, newProvider]);
    showNotification('Proveedor agregado exitosamente.', 'success');
  };
  
  const handleUpdateProvider = (updatedProvider: Proveedor) => {
    setProveedores(prev => prev.map(p => p.id === updatedProvider.id ? updatedProvider : p));
    showNotification('Proveedor actualizado exitosamente.', 'success');
  };

  const handleAddTecnologia = (tecnologia: Omit<Tecnologia, 'id'>) => {
    const newTecnologia: Tecnologia = {
      ...tecnologia,
      id: Math.max(...tecnologias.map(t => t.id), 0) + 1,
    };
    setTecnologias(prev => [...prev, newTecnologia]);
     showNotification('Tecnología agregada exitosamente.', 'success');
  };

  const handleAddTramite = (tramite: Omit<Tramite, 'id'>) => {
    const newTramite: Tramite = {
      ...tramite,
      id: Math.max(...tramites.map(t => t.id), 0) + 1,
    };
    setTramites(prev => [...prev, newTramite]);
    showNotification('Trámite agregado exitosamente.', 'success');
  };
  
  const handleAddDocuments = (newDocuments: Omit<Documento, 'id'>[]) => {
    let nextId = Math.max(...documentos.map(d => d.id), 0) + 1;
    const documentsToAdd: Documento[] = newDocuments.map(doc => ({
      ...doc,
      id: nextId++,
    }));
    setDocumentos(prev => [...prev, ...documentsToAdd]);
    showNotification(`${documentsToAdd.length} documento(s) agregado(s) exitosamente.`, 'success');
  };
  
  const handleSelectProvider = (id: number) => {
    setSelectedProviderId(id);
    setView('proveedor-detail');
  };

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard data={{ proveedores, tramites, documentos, tecnologias }} />;
      case 'proveedores':
        return <ProviderList proveedores={proveedores} onSelectProvider={handleSelectProvider} onAddProvider={handleAddProvider} onUpdateProvider={handleUpdateProvider} />;
      case 'proveedor-detail':
        const provider = proveedores.find(p => p.id === selectedProviderId);
        if (!provider) {
          setView('proveedores'); // Go back if provider not found
          return null;
        }
        return <ProviderDetail 
                  provider={provider} 
                  tecnologias={tecnologias.filter(t => t.proveedorId === selectedProviderId)}
                  tramites={tramites.filter(t => t.proveedorId === selectedProviderId)}
                  documentos={documentos.filter(d => d.proveedorId === selectedProviderId)}
                  onAddTecnologia={handleAddTecnologia}
                  onAddTramite={handleAddTramite}
                  onAddDocuments={handleAddDocuments}
                  onUpdateProvider={handleUpdateProvider}
               />;
      case 'tecnologias':
        return <TecnologiaList tecnologias={tecnologias} proveedores={proveedores} tramites={tramites} onSelectProvider={handleSelectProvider} />;
      case 'documentos':
        return <DocumentoList documentos={documentos} proveedores={proveedores} tramites={tramites} onSelectProvider={handleSelectProvider} onAddDocuments={handleAddDocuments}/>;
      case 'reportes':
        return <Reports data={{ proveedores, documentos, tecnologias, tramites }} />;
      default:
        return <Dashboard data={{ proveedores, tramites, documentos, tecnologias }} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100">
      <aside className="w-64 bg-slate-800 text-slate-100 flex flex-col">
        <div className="h-24 flex items-center justify-center p-4 border-b border-slate-700 bg-white">
          <img src={logoSrc} alt="Logo Gobierno de la Provincia de Buenos Aires" className="h-full object-contain" />
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavItem icon={<HomeIcon />} label="Dashboard" active={view === 'dashboard'} onClick={() => setView('dashboard')} />
          <NavItem icon={<BuildingOfficeIcon />} label="Proveedores" active={view === 'proveedores' || view === 'proveedor-detail'} onClick={() => setView('proveedores')} />
          <NavItem icon={<WrenchScrewdriverIcon />} label="Tecnologías" active={view === 'tecnologias'} onClick={() => setView('tecnologias')} />
          <NavItem icon={<DocumentIcon />} label="Documentos" active={view === 'documentos'} onClick={() => setView('documentos')} />
          <NavItem icon={<ChartBarIcon />} label="Informes" active={view === 'reportes'} onClick={() => setView('reportes')} />
        </nav>
      </aside>
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        {renderView()}
      </main>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-left transition-colors ${
      active ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-700 hover:text-white'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default App;
