// Copyright (C) 2021-2022 Prosopo (UK) Ltd.
// This file is part of provider <https://github.com/prosopo/provider>.
//
// provider is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// provider is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with provider.  If not, see <http://www.gnu.org/licenses/>.

export interface MerkleNodeInterface {
    hash: string
    parent: string | null
}

export type MerkleLeaf = string

export type MerkleLayer = MerkleLeaf[]

export type MerkleProofLayer = [MerkleLeaf, MerkleLeaf]

export type MerkleRootLayer = [MerkleLeaf]

export type MerkleProof = [...MerkleProofLayer[], MerkleRootLayer]
