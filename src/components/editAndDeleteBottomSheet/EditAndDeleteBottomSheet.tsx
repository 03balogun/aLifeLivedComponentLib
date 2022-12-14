import React from 'react';
import { SystemBottomSheet } from '../../themes/systemBottomSheet/SystemBottomSheet';
import { Button } from '../button/Button';
import { Box } from '../../themes/box/Box';

type EditAndDeleteBottomSheetTypes = {
  isVisible: boolean;
  deleteStoryTestID: string;
  editStoryTestID: string;
  onRemoveStoryPress: () => void;
  onEditStoryPress: () => void;
  onClose: () => void;
};

export const EditAndDeleteBottomSheet: React.FC<EditAndDeleteBottomSheetTypes> =
  ({
    isVisible,
    onRemoveStoryPress,
    onEditStoryPress,
    onClose,
    editStoryTestID,
    deleteStoryTestID,
  }) => {
    return (
      <SystemBottomSheet isVisible={isVisible} onClose={() => onClose()}>
        <Box width="100%" marginLeft="m" marginRight="m">
          <Box marginLeft="m" marginRight="m" testID={editStoryTestID}>
            <Button
              title="Edit story"
              onPress={() => onEditStoryPress()}
              marginBottom="s"
              backgroundColor="backgroundContrastXLow"
            />
          </Box>
          <Box marginLeft="m" marginRight="m" testID={deleteStoryTestID}>
            <Button
              title="Delete story"
              onPress={() => onRemoveStoryPress()}
              backgroundColor="backgroundError"
            />
          </Box>
        </Box>
      </SystemBottomSheet>
    );
  };
