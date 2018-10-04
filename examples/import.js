import Vue from 'vue'
import Router from 'vue-router'
const HomeView = () => import(/* webpackChunkName: "HomeView" */ '@/components/HomeView')
const DetailView = () => import(/* webpackChunkName: "DetailView" */ '@/components/DetailView')
const PostView = () => import(/* webpackChunkName: "PostView" */ '@/components/PostView')
const CameraView = () => import(/* webpackChunkName: "CameraView" */ '@/components/CameraView')