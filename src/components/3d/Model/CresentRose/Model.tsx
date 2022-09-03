/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    立方体002: THREE.SkinnedMesh
    立方体002_1: THREE.SkinnedMesh
    Handle: THREE.SkinnedMesh
    立方体012: THREE.SkinnedMesh
    立方体012_1: THREE.SkinnedMesh
    立方体010: THREE.SkinnedMesh
    立方体010_1: THREE.SkinnedMesh
    mainBlade4_1: THREE.SkinnedMesh
    mainBladeAttachmenet: THREE.SkinnedMesh
    MainBladeConnect: THREE.SkinnedMesh
    mainBladeCover1: THREE.SkinnedMesh
    mainBladeCover2: THREE.SkinnedMesh
    mainSubBlade_1: THREE.SkinnedMesh
    subBlade2: THREE.SkinnedMesh
    subBladeAttachement1: THREE.SkinnedMesh
    subBladeAttachement2_1: THREE.SkinnedMesh
    立方体014: THREE.SkinnedMesh
    立方体014_1: THREE.SkinnedMesh
    subBladeCover_1: THREE.SkinnedMesh
    立方体001: THREE.SkinnedMesh
    立方体001_1: THREE.SkinnedMesh
    root: THREE.Bone
  }
  materials: {
    Black_1: THREE.MeshStandardMaterial
    Red_1: THREE.MeshStandardMaterial
    Blade_1: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF(
    '/3dModels/cresentRose.glb'
  ) as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions.Action !== null ? actions.Action.play() : null
  })

  return (
    <group ref={group as any} {...props} dispose={null}>
      <group name="Scene">
        <group name="アーマチュア" rotation={[0, 0, -0.01]}>
          <primitive object={nodes.root} />
          <group name="Body_1">
            <skinnedMesh
              name="立方体002"
              geometry={nodes.立方体002.geometry}
              material={materials.Black_1}
              skeleton={nodes.立方体002.skeleton}
            />
            <skinnedMesh
              name="立方体002_1"
              geometry={nodes.立方体002_1.geometry}
              material={materials.Red_1}
              skeleton={nodes.立方体002_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="Handle"
            geometry={nodes.Handle.geometry}
            material={materials.Black_1}
            skeleton={nodes.Handle.skeleton}
          />
          <group name="mainBlade1_1">
            <skinnedMesh
              name="立方体012"
              geometry={nodes.立方体012.geometry}
              material={materials.Red_1}
              skeleton={nodes.立方体012.skeleton}
            />
            <skinnedMesh
              name="立方体012_1"
              geometry={nodes.立方体012_1.geometry}
              material={materials.Black_1}
              skeleton={nodes.立方体012_1.skeleton}
            />
          </group>
          <group name="mainBlade2_1">
            <skinnedMesh
              name="立方体010"
              geometry={nodes.立方体010.geometry}
              material={materials.Red_1}
              skeleton={nodes.立方体010.skeleton}
            />
            <skinnedMesh
              name="立方体010_1"
              geometry={nodes.立方体010_1.geometry}
              material={materials.Black_1}
              skeleton={nodes.立方体010_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="mainBlade4_1"
            geometry={nodes.mainBlade4_1.geometry}
            material={materials.Blade_1}
            skeleton={nodes.mainBlade4_1.skeleton}
          />
          <skinnedMesh
            name="mainBladeAttachmenet"
            geometry={nodes.mainBladeAttachmenet.geometry}
            material={materials.Black_1}
            skeleton={nodes.mainBladeAttachmenet.skeleton}
          />
          <skinnedMesh
            name="MainBladeConnect"
            geometry={nodes.MainBladeConnect.geometry}
            material={materials.Red_1}
            skeleton={nodes.MainBladeConnect.skeleton}
          />
          <skinnedMesh
            name="mainBladeCover1"
            geometry={nodes.mainBladeCover1.geometry}
            material={materials.Material}
            skeleton={nodes.mainBladeCover1.skeleton}
          />
          <skinnedMesh
            name="mainBladeCover2"
            geometry={nodes.mainBladeCover2.geometry}
            material={materials.Material}
            skeleton={nodes.mainBladeCover2.skeleton}
          />
          <skinnedMesh
            name="mainSubBlade_1"
            geometry={nodes.mainSubBlade_1.geometry}
            material={materials.Blade_1}
            skeleton={nodes.mainSubBlade_1.skeleton}
          />
          <skinnedMesh
            name="subBlade2"
            geometry={nodes.subBlade2.geometry}
            material={materials.Blade_1}
            skeleton={nodes.subBlade2.skeleton}
          />
          <skinnedMesh
            name="subBladeAttachement1"
            geometry={nodes.subBladeAttachement1.geometry}
            material={materials.Black_1}
            skeleton={nodes.subBladeAttachement1.skeleton}
          />
          <skinnedMesh
            name="subBladeAttachement2_1"
            geometry={nodes.subBladeAttachement2_1.geometry}
            material={materials.Black_1}
            skeleton={nodes.subBladeAttachement2_1.skeleton}
          />
          <group name="subBladeConnect_1">
            <skinnedMesh
              name="立方体014"
              geometry={nodes.立方体014.geometry}
              material={materials.Red_1}
              skeleton={nodes.立方体014.skeleton}
            />
            <skinnedMesh
              name="立方体014_1"
              geometry={nodes.立方体014_1.geometry}
              material={materials.Black_1}
              skeleton={nodes.立方体014_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="subBladeCover_1"
            geometry={nodes.subBladeCover_1.geometry}
            material={materials.Red_1}
            skeleton={nodes.subBladeCover_1.skeleton}
          />
          <group name="subBody_1">
            <skinnedMesh
              name="立方体001"
              geometry={nodes.立方体001.geometry}
              material={materials.Black_1}
              skeleton={nodes.立方体001.skeleton}
            />
            <skinnedMesh
              name="立方体001_1"
              geometry={nodes.立方体001_1.geometry}
              material={materials.Red_1}
              skeleton={nodes.立方体001_1.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3dModels/cresentRose.glb')
